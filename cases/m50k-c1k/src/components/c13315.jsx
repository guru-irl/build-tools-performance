import React from 'react';
const LABEL_13315 = 'component_13315';
export function Component13315({ value = 13315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13315, 'data-value': derived.doubled }, children);
}
export default Component13315;
