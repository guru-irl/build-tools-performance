import React from 'react';
const LABEL_34347 = 'component_34347';
export function Component34347({ value = 34347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34347, 'data-value': derived.doubled }, children);
}
export default Component34347;
