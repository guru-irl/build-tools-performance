import React from 'react';
const LABEL_43100 = 'component_43100';
export function Component43100({ value = 43100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43100, 'data-value': derived.doubled }, children);
}
export default Component43100;
