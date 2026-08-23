import React from 'react';
const LABEL_10235 = 'component_10235';
export function Component10235({ value = 10235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10235, 'data-value': derived.doubled }, children);
}
export default Component10235;
