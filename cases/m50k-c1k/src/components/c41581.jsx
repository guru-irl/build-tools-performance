import React from 'react';
const LABEL_41581 = 'component_41581';
export function Component41581({ value = 41581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41581, 'data-value': derived.doubled }, children);
}
export default Component41581;
