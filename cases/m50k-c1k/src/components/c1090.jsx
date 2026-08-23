import React from 'react';
const LABEL_1090 = 'component_1090';
export function Component1090({ value = 1090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1090, 'data-value': derived.doubled }, children);
}
export default Component1090;
