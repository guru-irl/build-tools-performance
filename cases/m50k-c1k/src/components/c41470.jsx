import React from 'react';
const LABEL_41470 = 'component_41470';
export function Component41470({ value = 41470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41470, 'data-value': derived.doubled }, children);
}
export default Component41470;
