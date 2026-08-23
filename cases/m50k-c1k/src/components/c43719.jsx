import React from 'react';
const LABEL_43719 = 'component_43719';
export function Component43719({ value = 43719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43719, 'data-value': derived.doubled }, children);
}
export default Component43719;
