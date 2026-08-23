import React from 'react';
const LABEL_41364 = 'component_41364';
export function Component41364({ value = 41364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41364, 'data-value': derived.doubled }, children);
}
export default Component41364;
