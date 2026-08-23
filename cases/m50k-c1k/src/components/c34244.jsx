import React from 'react';
const LABEL_34244 = 'component_34244';
export function Component34244({ value = 34244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34244, 'data-value': derived.doubled }, children);
}
export default Component34244;
