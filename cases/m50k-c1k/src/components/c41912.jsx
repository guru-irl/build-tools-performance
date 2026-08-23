import React from 'react';
const LABEL_41912 = 'component_41912';
export function Component41912({ value = 41912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41912, 'data-value': derived.doubled }, children);
}
export default Component41912;
