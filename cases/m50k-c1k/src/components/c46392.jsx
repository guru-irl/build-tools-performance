import React from 'react';
const LABEL_46392 = 'component_46392';
export function Component46392({ value = 46392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46392, 'data-value': derived.doubled }, children);
}
export default Component46392;
