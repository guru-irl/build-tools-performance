import React from 'react';
const LABEL_8846 = 'component_8846';
export function Component8846({ value = 8846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8846, 'data-value': derived.doubled }, children);
}
export default Component8846;
