import React from 'react';
const LABEL_39808 = 'component_39808';
export function Component39808({ value = 39808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39808, 'data-value': derived.doubled }, children);
}
export default Component39808;
