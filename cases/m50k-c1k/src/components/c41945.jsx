import React from 'react';
const LABEL_41945 = 'component_41945';
export function Component41945({ value = 41945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41945, 'data-value': derived.doubled }, children);
}
export default Component41945;
