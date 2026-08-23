import React from 'react';
const LABEL_41657 = 'component_41657';
export function Component41657({ value = 41657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41657, 'data-value': derived.doubled }, children);
}
export default Component41657;
