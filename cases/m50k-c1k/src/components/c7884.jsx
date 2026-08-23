import React from 'react';
const LABEL_7884 = 'component_7884';
export function Component7884({ value = 7884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7884, 'data-value': derived.doubled }, children);
}
export default Component7884;
