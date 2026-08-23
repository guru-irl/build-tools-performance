import React from 'react';
const LABEL_41414 = 'component_41414';
export function Component41414({ value = 41414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41414, 'data-value': derived.doubled }, children);
}
export default Component41414;
