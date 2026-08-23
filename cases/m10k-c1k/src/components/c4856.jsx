import React from 'react';
const LABEL_4856 = 'component_4856';
export function Component4856({ value = 4856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4856, 'data-value': derived.doubled }, children);
}
export default Component4856;
