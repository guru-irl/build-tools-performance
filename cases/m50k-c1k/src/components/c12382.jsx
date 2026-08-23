import React from 'react';
const LABEL_12382 = 'component_12382';
export function Component12382({ value = 12382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12382, 'data-value': derived.doubled }, children);
}
export default Component12382;
