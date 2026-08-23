import React from 'react';
const LABEL_4441 = 'component_4441';
export function Component4441({ value = 4441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4441, 'data-value': derived.doubled }, children);
}
export default Component4441;
