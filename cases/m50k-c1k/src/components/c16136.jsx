import React from 'react';
const LABEL_16136 = 'component_16136';
export function Component16136({ value = 16136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16136, 'data-value': derived.doubled }, children);
}
export default Component16136;
