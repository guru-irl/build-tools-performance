import React from 'react';
const LABEL_4829 = 'component_4829';
export function Component4829({ value = 4829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4829, 'data-value': derived.doubled }, children);
}
export default Component4829;
