import React from 'react';
const LABEL_20598 = 'component_20598';
export function Component20598({ value = 20598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20598, 'data-value': derived.doubled }, children);
}
export default Component20598;
