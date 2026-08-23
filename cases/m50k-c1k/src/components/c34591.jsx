import React from 'react';
const LABEL_34591 = 'component_34591';
export function Component34591({ value = 34591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34591, 'data-value': derived.doubled }, children);
}
export default Component34591;
