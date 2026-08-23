import React from 'react';
const LABEL_3098 = 'component_3098';
export function Component3098({ value = 3098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3098, 'data-value': derived.doubled }, children);
}
export default Component3098;
