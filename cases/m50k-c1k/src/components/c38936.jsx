import React from 'react';
const LABEL_38936 = 'component_38936';
export function Component38936({ value = 38936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38936, 'data-value': derived.doubled }, children);
}
export default Component38936;
