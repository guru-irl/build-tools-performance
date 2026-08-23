import React from 'react';
const LABEL_41014 = 'component_41014';
export function Component41014({ value = 41014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41014, 'data-value': derived.doubled }, children);
}
export default Component41014;
