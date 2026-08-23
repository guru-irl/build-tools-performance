import React from 'react';
const LABEL_18959 = 'component_18959';
export function Component18959({ value = 18959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18959, 'data-value': derived.doubled }, children);
}
export default Component18959;
