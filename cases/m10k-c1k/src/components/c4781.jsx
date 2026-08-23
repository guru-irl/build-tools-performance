import React from 'react';
const LABEL_4781 = 'component_4781';
export function Component4781({ value = 4781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4781, 'data-value': derived.doubled }, children);
}
export default Component4781;
