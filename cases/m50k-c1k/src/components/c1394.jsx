import React from 'react';
const LABEL_1394 = 'component_1394';
export function Component1394({ value = 1394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1394, 'data-value': derived.doubled }, children);
}
export default Component1394;
