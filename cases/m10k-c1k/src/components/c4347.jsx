import React from 'react';
const LABEL_4347 = 'component_4347';
export function Component4347({ value = 4347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4347, 'data-value': derived.doubled }, children);
}
export default Component4347;
