import React from 'react';
const LABEL_4072 = 'component_4072';
export function Component4072({ value = 4072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4072, 'data-value': derived.doubled }, children);
}
export default Component4072;
