import React from 'react';
const LABEL_136 = 'component_136';
export function Component136({ value = 136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_136, 'data-value': derived.doubled }, children);
}
export default Component136;
