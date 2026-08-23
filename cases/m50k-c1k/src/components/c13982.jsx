import React from 'react';
const LABEL_13982 = 'component_13982';
export function Component13982({ value = 13982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13982, 'data-value': derived.doubled }, children);
}
export default Component13982;
