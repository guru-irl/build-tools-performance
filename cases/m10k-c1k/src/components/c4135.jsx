import React from 'react';
const LABEL_4135 = 'component_4135';
export function Component4135({ value = 4135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4135, 'data-value': derived.doubled }, children);
}
export default Component4135;
