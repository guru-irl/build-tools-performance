import React from 'react';
const LABEL_41392 = 'component_41392';
export function Component41392({ value = 41392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41392, 'data-value': derived.doubled }, children);
}
export default Component41392;
