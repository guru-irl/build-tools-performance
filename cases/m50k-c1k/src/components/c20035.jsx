import React from 'react';
const LABEL_20035 = 'component_20035';
export function Component20035({ value = 20035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20035, 'data-value': derived.doubled }, children);
}
export default Component20035;
