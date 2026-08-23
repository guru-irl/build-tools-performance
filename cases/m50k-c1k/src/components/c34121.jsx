import React from 'react';
const LABEL_34121 = 'component_34121';
export function Component34121({ value = 34121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34121, 'data-value': derived.doubled }, children);
}
export default Component34121;
