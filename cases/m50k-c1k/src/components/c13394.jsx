import React from 'react';
const LABEL_13394 = 'component_13394';
export function Component13394({ value = 13394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13394, 'data-value': derived.doubled }, children);
}
export default Component13394;
