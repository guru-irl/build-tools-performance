import React from 'react';
const LABEL_7136 = 'component_7136';
export function Component7136({ value = 7136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7136, 'data-value': derived.doubled }, children);
}
export default Component7136;
