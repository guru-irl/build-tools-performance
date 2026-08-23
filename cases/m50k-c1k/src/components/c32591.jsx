import React from 'react';
const LABEL_32591 = 'component_32591';
export function Component32591({ value = 32591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32591, 'data-value': derived.doubled }, children);
}
export default Component32591;
