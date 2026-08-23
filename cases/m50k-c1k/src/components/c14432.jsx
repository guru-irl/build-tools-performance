import React from 'react';
const LABEL_14432 = 'component_14432';
export function Component14432({ value = 14432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14432, 'data-value': derived.doubled }, children);
}
export default Component14432;
