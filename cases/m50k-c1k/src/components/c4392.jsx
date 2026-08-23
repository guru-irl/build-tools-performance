import React from 'react';
const LABEL_4392 = 'component_4392';
export function Component4392({ value = 4392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4392, 'data-value': derived.doubled }, children);
}
export default Component4392;
