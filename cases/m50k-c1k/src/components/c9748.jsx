import React from 'react';
const LABEL_9748 = 'component_9748';
export function Component9748({ value = 9748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9748, 'data-value': derived.doubled }, children);
}
export default Component9748;
