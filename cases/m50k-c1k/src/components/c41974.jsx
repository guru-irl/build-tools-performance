import React from 'react';
const LABEL_41974 = 'component_41974';
export function Component41974({ value = 41974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41974, 'data-value': derived.doubled }, children);
}
export default Component41974;
