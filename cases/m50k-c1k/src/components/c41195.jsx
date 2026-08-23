import React from 'react';
const LABEL_41195 = 'component_41195';
export function Component41195({ value = 41195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41195, 'data-value': derived.doubled }, children);
}
export default Component41195;
