import React from 'react';
const LABEL_37812 = 'component_37812';
export function Component37812({ value = 37812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37812, 'data-value': derived.doubled }, children);
}
export default Component37812;
