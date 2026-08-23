import React from 'react';
const LABEL_38434 = 'component_38434';
export function Component38434({ value = 38434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38434, 'data-value': derived.doubled }, children);
}
export default Component38434;
