import React from 'react';
const LABEL_29394 = 'component_29394';
export function Component29394({ value = 29394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29394, 'data-value': derived.doubled }, children);
}
export default Component29394;
