import React from 'react';
const LABEL_12839 = 'component_12839';
export function Component12839({ value = 12839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12839, 'data-value': derived.doubled }, children);
}
export default Component12839;
