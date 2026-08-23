import React from 'react';
const LABEL_11059 = 'component_11059';
export function Component11059({ value = 11059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11059, 'data-value': derived.doubled }, children);
}
export default Component11059;
