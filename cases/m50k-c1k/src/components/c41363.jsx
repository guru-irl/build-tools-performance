import React from 'react';
const LABEL_41363 = 'component_41363';
export function Component41363({ value = 41363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41363, 'data-value': derived.doubled }, children);
}
export default Component41363;
