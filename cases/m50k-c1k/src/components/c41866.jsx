import React from 'react';
const LABEL_41866 = 'component_41866';
export function Component41866({ value = 41866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41866, 'data-value': derived.doubled }, children);
}
export default Component41866;
