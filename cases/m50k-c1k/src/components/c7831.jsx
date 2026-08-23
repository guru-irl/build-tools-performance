import React from 'react';
const LABEL_7831 = 'component_7831';
export function Component7831({ value = 7831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7831, 'data-value': derived.doubled }, children);
}
export default Component7831;
