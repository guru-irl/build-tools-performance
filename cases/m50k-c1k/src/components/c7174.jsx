import React from 'react';
const LABEL_7174 = 'component_7174';
export function Component7174({ value = 7174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7174, 'data-value': derived.doubled }, children);
}
export default Component7174;
