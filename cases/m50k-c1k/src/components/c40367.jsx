import React from 'react';
const LABEL_40367 = 'component_40367';
export function Component40367({ value = 40367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40367, 'data-value': derived.doubled }, children);
}
export default Component40367;
